import React, { useState, useEffect } from "react";
import './AnimatedImage.css';
import mario from '../assets/mario.png';
import marioJump from '../assets/mario-jump.png';
import dokan from '../assets/dokan.png';
import cloud from '../assets/cloud.png';
import coin from '../assets/coin.png';

// const AnimatedImage = () => {
//     return (
//         <div className="animated-image-wrapper">
//             <div className="animated-cloud-container">
//                 <img src={cloud} alt="Cloud 1" className="animated-cloud cloud-1" />
//                 <img src={cloud} alt="Cloud 2" className="animated-cloud cloud-2" />
//                 <img src={cloud} alt="Cloud 3" className="animated-cloud cloud-3" />
//             </div>
//             <div className="animated-dokan-container">
//                 <img src={dokan} alt="Dokan 1" className="animated-dokan" />
//                 <img src={coin} alt="coin" className="animated-coin" />
//                 <img src={dokan} alt="Dokan 2" className="animated-dokan" />
//             </div>
//             <div className="animated-mario-container">
//                 <img src={mario} alt="Mario" className="animated-mario" />
//             </div>
//         </div>
//     );
// };

const AnimatedImage = () => {
    const [isJumping, setIsJumping] = useState(false);

    useEffect(() => {
        // 1サイクル（上昇と下降）全体のアニメーションの時間（2.5秒）
        const fullAnimationDuration = 2500;

        const animateMario = () => {
            // アニメーション開始時にMarioがジャンプして上昇する
            setIsJumping(true);

            // アニメーションの半分（1.25秒）経過後にMarioが下降し始める
            setTimeout(() => {
                setIsJumping(false);
            }, fullAnimationDuration / 2); // 1.25秒の遅延で下降開始

            // 全体のアニメーション時間が経過したらサイクルを再スタート
            setTimeout(animateMario, fullAnimationDuration);
        };

        animateMario(); // アニメーションを開始

        return () => {
            // コンポーネントがアンマウントされたときにタイムアウトをクリーンアップ
            clearTimeout();
        };
    }, []);

    return (
        <div className="animated-image-wrapper">
            <div className="animated-cloud-container">
                <img src={cloud} alt="Cloud 1" className="animated-cloud cloud-1" />
                <img src={cloud} alt="Cloud 2" className="animated-cloud cloud-2" />
                <img src={cloud} alt="Cloud 3" className="animated-cloud cloud-3" />
            </div>
            <div className="animated-dokan-container">
                <img src={dokan} alt="Dokan 1" className="animated-dokan" />
                <img src={coin} alt="coin" className="animated-coin" />
                <img src={dokan} alt="Dokan 2" className="animated-dokan" />
            </div>
            <div className="animated-mario-container">
                <img
                    src={isJumping ? marioJump : mario}
                    alt="Mario"
                    className="animated-mario"
                />
            </div>
        </div>
    );
};

export default AnimatedImage;