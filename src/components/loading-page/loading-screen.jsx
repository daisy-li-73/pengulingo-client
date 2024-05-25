import React, { useEffect } from 'react';
import './styles.css'; // Make sure your CSS is imported

const LoadingScreen = () => {

    useEffect(() => {
        const balloonPairs = document.querySelectorAll('.balloon');

        function animateBalloons(index = 0) {
            if (index < balloonPairs.length) {
                const unpoppedImg = balloonPairs[index].querySelector('.unpopped');
                const poppedImg = balloonPairs[index].querySelector('.popped');

                unpoppedImg.style.opacity = '1';
                poppedImg.style.opacity = '0';
                unpoppedImg.classList.add('animate-pop');

                setTimeout(() => {
                    unpoppedImg.classList.remove('animate-pop');
                    unpoppedImg.style.opacity = '0';
                    poppedImg.style.opacity = '1';
                }, 2000);

                setTimeout(() => {
                    animateBalloons(index + 1);
                }, 2500);
            } else {
                setTimeout(() => {
                    balloonPairs.forEach(balloon => {
                        const unpoppedImg = balloon.querySelector('.unpopped');
                        const poppedImg = balloon.querySelector('.popped');
                        unpoppedImg.style.opacity = '1';
                        poppedImg.style.opacity = '0';
                    });

                    setTimeout(() => animateBalloons(0), 500);
                }, 3000);
            }
        }

        animateBalloons();

    }, []);

    return (
        <div className="loading-screen">
            <div className="pengu">
                <img src="images-loading/pengu.png" className="pengu-img" alt="Pengu" />
            </div>
            <div className="balloons">
                <div className="black balloon">
                    <img src="images-loading/black-unpopped.png" className="black-unpopped unpopped" alt="Black Unpopped" />
                    <img src="images-loading/black-popped.png" className="black-popped popped" alt="Black Popped" />
                </div>
                <div className="blue balloon">
                    <img src="images-loading/blue-unpopped.png" className="blue-unpopped unpopped" alt="Blue Unpopped" />
                    <img src="images-loading/blue-popped.png" className="blue-popped popped" alt="Blue Popped" />
                </div>
                <div className="green balloon">
                    <img src="images-loading/green-unpopped.png" className="green-unpopped unpopped" alt="Green Unpopped" />
                    <img src="images-loading/green-popped.png" className="green-popped popped" alt="Green Popped" />
                </div>
                <div className="pink balloon">
                    <img src="images-loading/pink-unpopped.png" className="pink-unpopped unpopped" alt="Pink Unpopped" />
                    <img src="images-loading/pink-popped.png" className="pink-popped popped" alt="Pink Popped" />
                </div>
                <div className="red balloon">
                    <img src="images-loading/red-unpopped.png" className="red-unpopped unpopped" alt="Red Unpopped" />
                    <img src="images-loading/red-popped.png" className="red-popped popped" alt="Red Popped" />
                </div>
                <div className="white balloon">
                    <img src="images-loading/white-unpopped.png" className="white-unpopped unpopped" alt="White Unpopped" />
                    <img src="images-loading/white-popped.png" className="white-popped popped" alt="White Popped" />
                </div>
                <div className="yellow balloon">
                    <img src="images-loading/yellow-unpopped.png" className="yellow-unpopped unpopped" alt="Yellow Unpopped" />
                    <img src="images-loading/yellow-popped.png" className="yellow-popped popped" alt="Yellow Popped" />
                </div>
                <div className="yellow2 balloon">
                    <img src="images-loading/yellow2-unpopped.png" className="yellow2-unpopped unpopped" alt="Yellow2 Unpopped" />
                    <img src="images-loading/yellow2-popped.png" className="yellow2-popped popped" alt="Yellow2 Popped" />
                </div>
            </div>
            <div className="text">
                The Anticipation!
            </div>
        </div>
    );
}

export default LoadingScreen;
