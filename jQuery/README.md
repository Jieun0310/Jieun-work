# jquery 기본연습

- mockaroo 목업데이터 사이트
- https://www.mockaroo.com/

## jquery basic
- animate()
...

 $('.btn2').on('click',function(){
        $('.text2').animate({marginLeft: '+=50px',fontSize:30},2000,function(){
            alert('hello?')
        })
})

...

### 설명

- 기본선택자
- 탐색선택자
- 속성선택자