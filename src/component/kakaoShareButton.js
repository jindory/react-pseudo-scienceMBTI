import React from 'react';
import Button from 'react-bootstrap/Button';
const { Kakao } = window; //카카오 초기화에 있는고 필요하니까 넣어준 것

const KakaoShareButton = ( {data}) => {
    const url = "https://mypersonalterminal.netlify.app/";
    const resultUrl = window.location.href; //공유할 주소
    

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
            description: `${data.share}`,
            imageUrl:
            url + data.image,
            link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
            },
        },
        buttons: [
            {
                title: '나도 테스트 하러가기',
                link: {
                    mobileWebUrl: url,
                    webUrl : url,
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