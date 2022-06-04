import React from 'react';
import Button from 'react-bootstrap/Button';
const { Kakao } = window; //카카오 초기화에 있는고 필요하니까 넣어준 것

const KakaoShareButton = () => {
    const url = "https://mypersonalterminal.netlify.app/";
    const resultUrl = window.location.href; //공유할 주소

    console.log('test', resultUrl, url)

    React.useEffect(()=>{
        Kakao.cleanup(); //여러번 열리면 인증이 이미 됐다고 떠서 이거 넣어듐
        Kakao.init("9e96e2b0333cb9d42b15210e99253ca2");
        console.log(Kakao.isInitialized()); //인증키 잘 가져왔는지 확인!
        
    },[]);

    const shareKakao = () =>{
        Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: 'My Personal Terminal✨',
            description: '열정의 불꽃을 품고사는 순수한 이상주의 개발자',
            imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
            },
        },
        buttons: [
            {
                title: '나도 테스트 하러가기',
                link: {
                    mobileWebUrl: 'https://mypersonalterminal.netlify.app',
                },
            },
        ]
        });
    }
    
    return (
        <Button className="btn-cta share" onClick={shareKakao}>카카오톡 공유하기</Button>
    )
}


export default KakaoShareButton;