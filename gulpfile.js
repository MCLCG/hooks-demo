const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const del = require('del');

// 判断之前的build的产物是否存在,如果存在就删除
gulp.task('clean', async () => {
  await del('lib/**');
  await del('es/**');
  await del('dist/**'); // **是递归删除所有的文件
});

// 生成ESM
gulp.task('es', () => {
  // 将json解析成JS
  const tsProject = ts.createProject('tsconfig.hooks.json', {
    module: 'ESNext',
  });

  // 上面的解析完成后,gulp的链式调用,最后生成到es目录下
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 借助babel生成cjs的模块
gulp.task('cjs', () => {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

// 借助ts生成.d.ts生成文件(也就是输出类型文件)
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.hooks.json', {
    declaration: true, // 生成声明文件.d.ts
    emitDeclarationOnly: true, // 表示只生成声明文件.d.ts
  });
  // 也可以放到一个单独的文件夹types下面
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// 将根目录下的readme文件放到hooks下面
// 复制的动作
gulp.task('copyReadme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme');
