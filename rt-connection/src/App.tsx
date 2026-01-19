import './App.css'
import ButtonArea from './components/ButtonArea';
import ImmerTest from './components/ImmerTest';
import PropsArea from './components/PropsArea';
import PropsSection from './components/PropsSection';
import RhookUseState from './components/RhookUseState';
import ChangeArea from './components/test-components/ChangeArea';

// 버튼 4개 -> 버튼을 누를 떄마다 다른 UI를 보여줄 것이다.

function App() {


  return (
    <>
      <div>
        <ButtonArea></ButtonArea>
        <PropsArea kk={20} id={10} name="Hong Won Tae"></PropsArea>
        <PropsSection Icon={ChangeArea}></PropsSection>
        <RhookUseState></RhookUseState>
        <ImmerTest></ImmerTest>
      </div>
    </>
  )
}

export default App
