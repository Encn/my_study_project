https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

create branch

```
git checkout -b [name_of_your_new_branch]
```

see list

```
git branch
```

delete branch

```
git branch -D master
```


recovery branch

```
$ git reflog --no-abbrev

find the SHA

$ git checkout [sha]

$ git checkout -b [branchname]
```
