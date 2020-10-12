with open('tttt.txt', mode='r', encoding='utf-8') as rawtext :
    text=rawtext.read()
    # with 구문을 사용하면, 파일 관련 메소드 이용이 끝났을 때 자동으로 close가 작동한다.
print(text)

list=[]
while len(text)>0 :
    firstidx=text.find('>') # 다음 '>' 까지의 위치 찾기
    text=text[firstidx+1:] # 해당 위치까지 자르기 (태그 부분이 잘린다)
    lastidx=text.find('<') # 다음 '<'의 위치 찾기
    list.append(text[:lastidx]) # 알맹이를 뽑아서 리스트에 추가하기
    
print(list)

longtxt=""

for i in range(0, len(list)) :
    longtxt+=list[i]
    longtxt=longtxt.replace('- ','\n')
print(longtxt)

# https://velog.io/@zawook/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%ED%81%AC%EB%A1%A4%EB%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%EC%A0%9C%ED%95%98%EA%B8%B0
