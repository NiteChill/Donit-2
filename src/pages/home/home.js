import styles from './home.module.scss';

import Header from "../../components/Header/Header";
import Card from '../../components/Card/Card';

import purpleIllustration from '../../assets/img/purple-illustration.png'
import orangeIllustration from '../../assets/img/orange-illustration.png'

export default function Home() {
  return (
    <>
      <Header />
      <div className={`h-310 ${styles.grid}`}>
        <Card
          img={purpleIllustration}
          title='Organisation'
          text='We help you keeping your ideas organised while saving you time with our well designed to-do list.'
        />
        <Card
          img={orangeIllustration}
          title='Design'
          text='The design of our app is inspired by the website of Material 3 from google.'
        />
      </div>
    </>
  );
}