import re
import requests



def dowmloadPic(html,keyword):


    pic_url = re.findall('"objURL":"(.*?)",',html,re.S)
    i = 0
    print ('找到关键词:'+keyword+'的图片，现在开始下载图片...')
    for each in pic_url:
        print ('正在下载第'+str(i+1)+'张图片，图片地址:'+str(each))
        try:
            pic= requests.get(each, timeout=10)
        except requests.exceptions.ConnectionError:
            print ('【错误】当前图片无法下载')
            continue
        string = keyword+str(i) + '.jpg'
        #resolve the problem of encode, make sure that chinese name could be store
        with open(string,'wb') as f:
            f.write(pic.content)
        i += 1



if __name__ == '__main__':
    word = input("Input key word: ")
    url = 'http://image.baidu.com/search/flip?tn=baiduimage&ie=utf-8&word='+word+'&ct=201326592&v=flip'
    # url = 'https://image.baidu.com/search/flip?tn=baiduimage&ie=gbk&word='+word+'&ct=201326592&lm=-1&v=flip'
    # https://image.baidu.com/search/flip?tn=baiduimage&ie=gbk&word=%D0%A1%BB%C6%C8%CB&ct=201326592&lm=-1&v=flip
    result = requests.get(url)
    dowmloadPic(result.text,word)
