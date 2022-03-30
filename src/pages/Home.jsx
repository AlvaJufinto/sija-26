import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import { KeyboardCommandKeyIcon } from '@mui/icons-material';

import Navbar from "../components/Navbar";
import { GlobalColors, GlobalFonts } from "../globals";
import { StyledSection } from "../components/styledComponents";

export const HeroContainer = styled.div`
    padding: 150px 0 0 0;
    position: relative;

    h2 {
        font-size: 3rem;
    }

    .HeroContainer__ImgHolder {
        margin: 50px 0 0 0;
        width: 900px;
        max-width: 100%;
        overflow: hidden;
        
        h1 {
            font-size: 5rem;
        }
        img {
            transition: all 0.5s ease;
            width: 100%;
            object-fit: cover;
            
            &:hover {
                transform: scale(1.5);
            }
        }
    }

    .HeroContainer__TextHolder {
        background: ${GlobalColors.grey};
        width: 500px;
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
    }

    @media (max-width: 1024px) {
        .HeroContainer__TextHolder {
            position: relative;
            width: 100%;
        }
    }
`

export const AboutContainer = styled.div`
    margin: 40px 0;
    position: relative;

    h2 {
        font-size: 3rem;
    }
    
    .AboutContainer__TextHolder {
        margin: 40px 0 0 0;
        background: ${GlobalColors.grey};
        /* width: 50px; */
        max-width: 100%;
        padding: 30px;
        font-size: 1.5rem;
        border-bottom: 5px solid ${GlobalColors.blue};
        font-family: ${GlobalFonts.secondary};
    }

    .statistic {
        margin: 50px auto;
        text-align: center;
    }

    .AboutContainer__CounterHolder {
        width: 60%;
        margin: auto;
        display: flex;
        color: white;
        justify-content: space-between;

        .Counter {
            text-align: center; 

            h2 {
                font-size: 3.5rem;
            }

            p {
                font-size: 2rem;
                font-family: ${GlobalFonts.secondary};
            }
        }
    }

    @media (max-width: 1024px) {
        .AboutContainer__CounterHolder {
            flex-direction: column;
            gap: 50px;
        }
    }
`   

export const ChampsContainer = styled.div`
    margin: 300px 0;

    h2 {
        font-size: 3rem;
    }

    .ChampsContainer__sections {
        margin: 50px 0;
        display: flex;
        justify-content: space-between;
        /* background-color: blue; */

        .ChampsContainer__abstract {
            background-color: ${GlobalColors.grey};
            width: 2%;
            font-size: 2rem;
            line-height: 70px;
            letter-spacing: 10px;
            height: 100%;
        }

        .subjects {
            display: flex;
            flex-direction: column;
            gap: 50px;

            .subject {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;

                img {
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                    filter: grayscale(50%);
                }

                h3 {
                    font-size: 3rem;
                }

                p {
                    font-size: 1.5rem;
                }

                &:nth-child(odd) {
                    width: 75%;
                }
            }
        }
    }

`

export const CounterContainer = styled.div`
    
    h2 {
        text-align: center;
        font-size: 3rem;
    }
`   

const Home = () => {
    const { width, height } = useWindowDimensions();

    return ( 
        <StyledSection>
            <Navbar />
            <HeroContainer>
                <Parallax translateX={[10, 0]}>   
                    <h2>Selamat Datang di <span className="underline">SIJA’26</span></h2>
                </Parallax>
                {/* <p className="overlayedText" ></p> */}
                <div className="HeroContainer__ImgHolder">
                    {/* <img src={HeroSijaImg} alt="Bruh" /> */}
                    <h1>SMKN</h1>
                    <h1><span className="underline">Terbaik</span></h1>
                    <h1>Se-Jakarta</h1>
                </div>
                <Parallax translateY={width > 1024 ? [-50, -200] : [0, 0]} translateX={width > 1024 ? [62, 62] : [0, 0]} >
                    <div className="HeroContainer__TextHolder">
                        <div className="TextHolder">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus sapiente deleniti inventore quis possimus et, incidunt eum fugit.
                            </p>
                        </div>
                        <div className="TextHolder_Line"></div>
                    </div>
                </Parallax>
                </HeroContainer>
                {/* <CounterContainer>
                    <h2>Jumlah Guru dan Murid</h2>
                    <div className="Counter__Box">
                        <p>50</p>
                        <p>Guru dan siswa</p>
                    </div>
                </Parallax> */}
                <AboutContainer>
                <Parallax translateX={[0, 10]}>   
                    <h2>Siapakah <span className="underline">SIJA'26</span>?</h2>
                </Parallax>
                <div className="AboutContainer__TextHolder">
                    <div className="TextHolder">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam esse accusantium beatae cupiditate officiis consequatur ipsam dolorem non earum porro temporibus.
                        </p>
                    </div>
                    <div className="TextHolder_Line"></div>
                </div>

                <Parallax translateX={width > 1024 ? [5, -20] : [0, 0]}>
                    <h2 className="statistic" >Statistik  <span className="underline">SIJA’26</span></h2>
                </Parallax>
                <div className="AboutContainer__CounterHolder">

                    <div className="Counter">
                        <h2>3</h2>
                        <p>Pendidik</p>
                    </div>
                    <div className="Counter">
                        <h2>200</h2>
                        <p>Peserta Didik</p>
                    </div>
                    <div className="Counter">
                        <h2>9</h2>
                        <p>Mata Pelajaran</p>
                    </div>
                </div>
            </AboutContainer>
            <ChampsContainer>
                <Parallax translateX={[10, 0]}>
                    <h2>Lomba yang dimenangkan <span className="underline">SIJA’26</span></h2>
                </Parallax>   

                <div className="ChampsContainer__sections">
                    <div className="ChampsContainer__abstract">
                        champions, grind, victory, blood, sweat, tears, pain, war, battle, suffer, process, believer, revolution 
                    </div>
                    <div className="subjects">
                        <div className="subject" >
                            <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/4671/large.jpg" alt="" />
                            <div className="description">
                                <h3>Psatir Handal</h3>
                                <p>Lomba KKSI</p>
                                <p>Juara 69</p>
                                <p>Tahun 2069</p>
                            </div>
                        </div>
                        <div className="subject" >
                            <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/4671/large.jpg" alt="" />
                            <div className="description">
                                <h3>Psatir Handal</h3>
                                <p>Lomba KKSI</p>
                                <p>Juara 69</p>
                                <p>Tahun 2069</p>
                            </div>
                        </div>
                        <div className="subject" >
                            <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/4671/large.jpg" alt="" />
                            <div className="description">
                                <h3>Psatir Handal</h3>
                                <p>Lomba KKSI</p>
                                <p>Juara 69</p>
                                <p>Tahun 2069</p>
                            </div>
                        </div>
                    </div>
                </div>

            </ChampsContainer>
        </StyledSection>
     );
}
 
export default Home;