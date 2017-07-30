const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['app/*.json', 'app/**/*.json'];
const dest = 'dist/srv';

const tsProject = ts.createProject('tsconfig.srv.json');

gulp.task('scripts', () => {
	const tsResult = tsProject.src()
	.pipe(tsProject());
	return tsResult.js.pipe(gulp.dest(dest));
});

gulp.task('watch', ['scripts'], () => {
	gulp.watch('app/**/*.ts', ['scripts']);
	gulp.watch('app/*.ts', ['scripts']);
});

gulp.task('assets', () => {
	return gulp.src(JSON_FILES)
	.pipe(gulp.dest(dest));
});

gulp.task('default', ['watch', 'assets']);
