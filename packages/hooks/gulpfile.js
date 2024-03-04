// 这个位置的(子包)的配置文件,用于配置自己本身的配置

const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs'); // 文件的操作
const fse = require('fs-extra'); // fs的扩展
const fg = require('fast-glob'); // 文件的读取
const gm = require('gray-matter');

async function genDesc(mdPath) {
  if (!fs.existsSync(mdPath)) {
    return;
  }
  const mdFile = fs.readFileSync(mdPath, 'utf8'); // 异步读取文件并转换
  const { content } = gm(mdFile); // 将md转换成字符串

  // 第一个#后面第一个有用的字
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}

async function genMetaData() {
  const metadata = {
    functions: [],
  };
  const hooks = fg
    // use开头的文件
    .sync('src/use*', {
      onlyDirectories: true, // 只获取文件夹
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();
  await Promise.allSettled(
    hooks.map(async (hook) => {
      // 拿到md的文件
      const description = await genDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metadata.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });
  return metadata;
}

gulp.task('metadata', async () => {
  // 生成文件
  const metadata = await genMetaData();
  // 写入文件里
  await fse.writeJson('metadata.json', metadata, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metadata');
