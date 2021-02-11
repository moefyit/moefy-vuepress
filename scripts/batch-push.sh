commitAndPush() {
    commitMessage=$1
    if [[ $(git status -s) ]];then
        git pull --ff-only
        git add -A
        git commit -m "${commitMessage}"
        git push
    fi
}

commitMessage=$1
packages=(
    ribbon
    dynamic-title
    go-top
    meting
    cursor-effects
)

for package in ${packages[@]}
do
    cd "packages/vuepress-plugin-${package}"
    commitAndPush "${commitMessage}"
    cd -
done

commitAndPush "${commitMessage}"
