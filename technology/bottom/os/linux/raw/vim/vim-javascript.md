http://www.panozzaj.com/blog/2015/08/28/must-have-vim-javascript-setup/

vim-javascript

https://github.com/pangloss/vim-javascript

```
Plug 'pangloss/vim-javascript'
```

vim-node

https://github.com/moll/vim-node

```
Plug 'moll/vim-node'

gf : inside require('...')

[I

:Nedit module_name

```


html5-syntax.vim

https://github.com/othree/html5-syntax.vim

html5.vim

https://github.com/othree/html5.vim

```
Ctrl-N

:help html5.vim
```


vim-less

https://github.com/groenewege/vim-less

add those lines to .~/vimrc

```
autocmd BufNewFile,BufRead *.less set filetype=less
autocmd FileType less set omnifunc=csscomplete#CompleteCSS
```

```
CTRL + X + O
```

javascript-libraries-syntax.vim

https://github.com/othree/javascript-libraries-syntax.vim

add line to ~/.vimrc

```
let g:used_javascript_libs = 'underscore,angularjs,jasmine,chai'
```


```
set number
```

syntastic

https://github.com/scrooloose/syntastic

```
 set statusline+=%#warningmsg#
 set statusline+=%{SyntasticStatuslineFlag()}
 set statusline+=%*

 let g:syntastic_always_populate_loc_list = 1
 let g:syntastic_auto_loc_list = 1
 let g:syntastic_check_on_open = 1
 let g:syntastic_check_on_wq = 0
 let g:syntastic_javascript_checkers = ['eslint']
 let g:syntastic_javascript_eslint_exec = 'eslint_d'
```

```
npm i eslint_d -g

npm i babel-eslint -g
```
http://oli.me.uk/2013/06/29/equipping-vim-for-javascript/

```
cd ~/.vim/bundle/YouCompleteMe
./install.py --clang-completer --omnisharp-completer --gocode-completer \
    --tern-completer --racer-completer

before that you must install py.

yum install python-devel

cd ~/.vim/bundle/tern_for_vim && npm install
```
http://usevim.com/2012/07/18/nerdtree/
:NERDTree
:NERDTreeMirror

add file or directory: nerdtree press m -> a
