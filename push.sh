###
# @Author: your name
# @Date: 2021-01-13 16:58:29
 # @LastEditTime: 2021-01-13 19:46:24
 # @LastEditors: Please set LastEditors
# @Description: In User Settings Edit
# @FilePath: /desktop-tutorial/push.sh
###
dates=`date "+%Y-%m-%d"` #日期
times=`date "+%H:%M:%S"` #时间
blaches=`master`

isGit=$(ls -a | grep -x .git | wc -l) #判断是否有仓库
if [ $isGit -gt 0 ]; then
	isAdd=$(git status | grep "git add" | wc -l) #判断是否需要提交
	if [ $isAdd -gt 0 ]; then
		git add .
		git commit -m "自动提交 $dates $times"
		git push origin $blaches
		echo "+提交完成"
	else
		echo "-没有更改"
	fi
else
	echo "x没有仓库"
fi

