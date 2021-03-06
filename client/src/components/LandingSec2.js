import styled from 'styled-components';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import levelDia from '../images/LandingLevelDia.svg';
import levelGold from '../images/LandingLevelGold.svg';
import levelSilver from '../images/LandingLevelSilver.svg';
import leverStairs from '../images/levelStair.png';
import { useHistory } from 'react-router-dom';

AOS.init();

const SectionWrap = styled.div`
  width: 100%;
`;

const Section2Box = styled.ul`
  width: 100%;
  > #firstLi {
    margin-top: 0;
    > #firstWrap {
      @media only screen and (max-width: 1300px) {
        margin-top: 50px;
      }
      @media only screen and (max-width: 400px) {
        margin-top: 0;
      }
    }
  }
`;

const Section2Li = styled.li`
  width: 100%;
  > .reverse {
    text-align: right;
    @media only screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column-reverse;
    }
    > .notbtn {
      @media only screen and (max-width: 1300px) {
        height: 400px;
      }
      @media only screen and (max-width: 700px) {
        height: 350px;
      }
      @media only screen and (max-width: 400px) {
        height: 300px;
      }
      @media screen and (max-width: 320px) {
        height: 250px;
      }
    }
  }
`;

const DescriptWrap = styled.div`
  width: 1200px;
  display: flex;
  margin: 0 auto;
  margin-top: 400px;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-top: 200px;
    display: block;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 150px;
  }
`;

const DescripTextBox = styled.div`
  width: 512px;
  height: 387px;
  display: flex;
  align-items: center;
  float: left;
  @media only screen and (max-width: 1300px) {
    width: 500px;
    height: 500px;
    float: none;
    margin: 0 auto;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    height: 300px;
  }
`;

const DescripText = styled.div`
  width: 100%;
  @media only screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > .descripTextTitle {
    font-size: 45px;
    color: #fff;
    padding: 5px 0;
    line-height: 60px;
    @media only screen and (max-width: 1300px) {
      text-align: center;
      font-size: 40px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 30px;
      text-align: center;
    }
    @media screen and (max-width: 400px) {
      font-size: 23px;
      line-height: 40px;
    }
    @media screen and (max-width: 320px) {
      font-size: 18px;
      line-height: 30px;
    }
  }
  > p {
    font-size: 33px;
    line-height: 50px;
    padding-top: 30px;
    color: #fff;
    @media only screen and (max-width: 1300px) {
      text-align: center;
      font-size: 28px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 20px;
      text-align: center;
    }
    @media only screen and (max-width: 400px) {
      text-align: center;
      font-size: 17px;
      padding-top: 10px;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
      line-height: 30px;
    }
  }
  > button {
    border-radius: 50px;
    height: 50px;
    width: 240px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 30px;
    @media only screen and (max-width: 1300px) {
      width: 210px;
      height: 50px;
    }
    @media only screen and (max-width: 700px) {
      width: 150px;
      margin-top: 10px;
      height: 40px;
    }
    @media screen and (max-width: 320px) {
      margin-top: 20px;
    }
  }
  > button:hover {
    background-color: #fff;
    color: #230638;
    border: 2px solid #fff;
  }
`;

const DescriptGif = styled.div`
  width: 688px;
  height: 387px;
  border-radius: 40px;
  display: inline-block;
  @media only screen and (max-width: 1300px) {
    display: block;
    width: 544px;
    height: 306px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 700px) {
    width: 320px;
    height: 180px;
    border-radius: 20px;
  }
  @media only screen and (max-width: 320px) {
    width: 304px;
    height: 171px;
  }
  @media only screen and (max-width: 280px) {
    width: 256px;
    height: 144px;
  }
`;

const LevelWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 400px;

  @media only screen and (max-width: 1300px) {
    margin-top: 250px;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 200px;
  }
`;

const Levelup = styled.div`
  width: 100%;
  height: 60%;
  > .descripTextTitle {
    text-align: center;
    font-size: 45px;
    color: #fff;
    padding-bottom: 30px;
    @media only screen and (max-width: 1300px) {
      font-size: 40px;
    }
    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 23px;
      padding-bottom: 20px;
    }
    @media screen and (max-width: 320px) {
      font-size: 18px;
    }
  }
  > p {
    text-align: center;
    color: #fff;
    font-size: 22px;
    padding-top: 10px;
    @media only screen and (max-width: 1300px) {
      font-size: 18px;
    }
    @media screen and (max-width: 700px) {
      font-size: 14px;
    }
    @media screen and (max-width: 400px) {
      font-size: 10px;
      padding-top: 0;
    }
    @media screen and (max-width: 280px) {
      font-size: 8px;
    }
  }
  > #levelStairs {
    display: flex;
    width: 800px;
    height: 400px;
    background: url(${leverStairs});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    margin-top: 30px;
    @media only screen and (max-width: 900px) {
      width: 600px;
      height: 300px;
    }
    @media screen and (max-width: 700px) {
      width: 300px;
      height: 150px;
      margin-top: 10px;
    }
    @media only screen and (max-width: 350px) {
      width: 200px;
      height: 100px;
    }
    > li {
      flex: 1 1 auto;
      height: 80%;
      margin-left: 5px;
    }
    > #silverLevel {
      background: url(${levelSilver});
      background-repeat: no-repeat;
      background-position: center;
    }
    > #goldLevel {
      background: url(${levelGold});
      background-repeat: no-repeat;
      background-position: center;
    }
    > #diaLevel {
      background: url(${levelDia});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  > #descLevel {
    height: 20%;
    width: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }
`;

function LandingSec2({ scrollToQuiz }) {
  const history = useHistory();
  const goToMain = () => {
    history.push('/main');
    window.scrollTo(0, 0);
  };

  // const moveQuizSec = () => {
  //   window.scrollTo({ top: 5200, behavior: 'smooth' });
  // };
  return (
    <SectionWrap>
      <Section2Box>
        {/* ??????????????? ??? ???????????? ?????? */}
        <Section2Li
          id='firstLi'
          data-aos='fade-left'
          data-aos-duration='2000'
          data-aos-offset='300'
        >
          <DescriptWrap id='firstWrap'>
            <DescripTextBox>
              <DescripText>
                <div className='descripTextTitle'>
                  ??????????????? ???????????? <br /> ???????????????! ????
                </div>
                <p>
                  ????????? ???????????? ??????
                  <br />
                  ?????? ???????????? TOP 10???
                  <br />
                  ??????????????? ???????????????!
                </p>

                <button onClick={goToMain}>???????????? ??????</button>
              </DescripText>
            </DescripTextBox>
            <DescriptGif
              style={{
                backgroundImage: `url(https://cdn.discordapp.com/attachments/892308009194258502/893449285033680946/mainsearch.gif)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0px 0px 15px 0px ',
              }}
            />
          </DescriptWrap>
        </Section2Li>
        {/* ????????? ????????? ?????? */}
        <Section2Li
          data-aos='fade-right'
          data-aos-duration='2000'
          data-aos-offset='300'
        >
          <DescriptWrap className='reverse'>
            <DescriptGif
              style={{
                backgroundImage: `url(https://media.discordapp.net/attachments/878131722296918017/894819849128255498/MoreSearch_Changed.gif?width=1100&height=549)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0px 0px 20px 0px',
              }}
            />
            <DescripTextBox className='notbtn'>
              <DescripText className='desctext'>
                <div className='descripTextTitle'>
                  ??? ????????? ????????? ?????? <br /> ?????? ??????????! ????
                </div>
                <p>
                  ????????? ?????? ?????? ????????????
                  <br />
                  ????????? ????????????,
                  <br />
                  ?????? ?????? ????????? ??????????????????!
                </p>
              </DescripText>
            </DescripTextBox>
          </DescriptWrap>
        </Section2Li>

        <Section2Li
          data-aos='fade-left'
          data-aos-duration='2000'
          data-aos-offset='300'
        >
          <DescriptWrap>
            <DescripTextBox>
              <DescripText>
                <div className='descripTextTitle'>
                  ?????? ???????????? ????????? <br />
                  ????????? ????????????! ????
                </div>
                <p>
                  ?????? ????????? 10exp, <br />
                  ????????? ????????? 5exp???
                  <br />
                  ????????? ??? ?????????!
                </p>

                <button onClick={scrollToQuiz}>???????????? ??????</button>
              </DescripText>
            </DescripTextBox>
            <DescriptGif
              style={{
                backgroundImage: `url(https://media.discordapp.net/attachments/885202056355397686/892300356795658300/Quiz_Changed.gif?width=1098&height=549)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0px 0px 20px 0px',
              }}
            />
          </DescriptWrap>
        </Section2Li>

        {/* ?????? ????????? ?????? ????????? ??? ????????? ?????? */}
        <Section2Li
          data-aos='fade-right'
          data-aos-duration='2000'
          data-aos-offset='300'
        >
          <DescriptWrap className='reverse'>
            <DescriptGif
              style={{
                backgroundImage: `url(https://cdn.discordapp.com/attachments/892308009194258502/892311601011630171/Artboard_1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0px 0px 20px 0px',
              }}
            />
            <DescripTextBox className='notbtn'>
              <DescripText className='desctext'>
                <div className='descripTextTitle'>
                  ???????????? ?????? ??? ??????
                  <br /> JURIMMA! ????
                </div>
                <p>
                  ?????????, ?????????, ????????? ???
                  <br />
                  ?????? ????????????
                  <br />
                  ????????? ???????????? ??????????????????!
                </p>
              </DescripText>
            </DescripTextBox>
          </DescriptWrap>
        </Section2Li>

        {/* ???????????? ?????? ????????? ?????? */}
        <Section2Li
          data-aos='fade-up'
          data-aos-duration='2000'
          data-aos-offset='300'
        >
          <LevelWrap>
            <Levelup>
              <div className='descripTextTitle'>
                ????????? ???????????? ????????? ?????????! ????
              </div>
              <p>????????? ??????, ????????? ???????????? ???????????? ???????????? ???????????????.</p>
              <p>
                ??? ??? ????????? 5exp, ????????? ?????? ?????? 10exp??? ????????? ??? ?????????!
              </p>
              <div id='levelStairs'></div>
              {/* <ul>
                <li
                  id='silverLevel'
                  data-aos='fade-in'
                  data-aos-delay='500'
                ></li>
                <li
                  id='goldLevel'
                  data-aos='fade-in'
                  data-aos-delay='1000'
                ></li>
                <li id='diaLevel' data-aos='fade-in' data-aos-delay='1500'></li>
              </ul> */}
            </Levelup>
          </LevelWrap>
        </Section2Li>
      </Section2Box>
    </SectionWrap>
  );
}

export default LandingSec2;
