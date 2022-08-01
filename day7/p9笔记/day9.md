#  tsconfig的配置

tsconfig.json 是放在项目根目录，用来配置一些编译选项等。当我们使用 tsc 命令编译项目，且没有指定输入文件时，编译器就会去查找 tsconfig.json 文件。如果在当前目录没找到，就会逐级向父文件夹查找。我们也可以通过在 tsc 命令中加上–project 参数，来指定一个包含 tsconfig.json 文件的目录。如果命令行上指定了输入文件时，tsconfig.json 的配置会被忽略。

接下来我们看一下 tsconfig.json 里都有哪些可配置项。tsconfig.json 文件里有几个主要的配置项：

```json
{
  "compileOnSave": true,
  "files": [],
  "include": [],
  "exclude": [],
  "extends": "",
  "compilerOptions": {}
}
```

## files    指定编译的文件

files 可以配置一个数组列表，里面包含指定文件的相对或绝对路径。编译器在编译的时候只会编译包含在 files 中列出的文件。如果不指定，则取决于有没有设置 include 选项；如果没有 include 选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用`*`、`?`、`**/`等通配符。

## include   指定编译的文件

include 也可以指定要编译的路径列表，但和 files 的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符。比如`"./src"`即表示要编译 src 文件夹下的所有文件以及子文件夹的文件。

## exclude     排除不编译的文件

exclude 表示要排除的、不编译的文件，它也可以指定一个列表，规则和 include 一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，可以使用通配符

#  `compilerOptions   

它用来设置编译选项。因为它包含很多的可配置项，下面我们来看下 compilerOptions 里的所有可配项

- ### target   编译版本的目标

target 用于指定编译之后的版本目标，可选值有：`ES3(默认值)`、`ES5`、`ES2015`、`ES2016`、`ES2017`、`ESNEXT`。如果不配置 target 项，默认是讲代码转译为 ES3 的版本，如果设为 ESNEXT，则为最新 ES 规范版本。

- ### module       模块标准

module 用来指定要使用的模块标准，可选值有`commonjs`、`amd`、`system`、`umd`、`es2015(或写 es6)`。如果不设置 module 选项，则如果 target 设为 ES6，那么 module 默认值为 ES6，否则是 commonjs。

- ### lib      

lib 用于指定要包含在编译中的库文件。如果你要使用一些 ES6 的新语法，你需要引入 ES6 这个库，或者也可以写 ES2015。如果没有指定 lib 配置，默认会加载一些库，而加载什么库是受 target 影响的。如果 target 为 ES5，默认包含的库有`DOM`、`ES5`和`ScriptHost`；如果 target 是 ES6，默认引入的库有`DOM`、`ES6`、`DOM.Iterable`和`ScriptHost`。

- ### sourceMap    是否生成map文件

sourceMap 的值为 true 或 false，用来指定编译时是否生成.map 文件。

- ### outFile    把内容都放在一个文件里

outFile 用于指定将输出文件合并为一个文件，它的值为一个文件路径名，比如设置为`"./dist/main.js"`，则输出的文件为一个 main.js 文件。但是要注意，只有设置 module 的值为 amd 和 system 模块时才支持这个配置。

- ### outDir      把文件都放在一个文件夹里

outDir 用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹。

- ### rootDir      

用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现 1 以 rootDir 的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译。

- ### removeComments      删除注释

removeComments 值为 true 或 false，用于指定是否将编译后的文件中的注释删掉，设为 true 的话即删掉注释，默认为 false。







