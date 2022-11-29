import './App.css';

//exemplo de Type Com size com opção de ser obrigatório ou não
type TypeTitleProps = {
  text: string;
  size?: 'small' | 'medium';
};

//exemplo de children
type ChildrenTitleProps = {
  children: string;
  size: 'small' | 'medium';
};

//adicional de cor
type ColorProps = {
  color: string;
}

//exemplo com elementos
type ChildrenTitleElementProps = {
  children: React.ReactNode;
};

const TitleProps = ({ text }: TypeTitleProps) => {
  return <div>{text}</div>
}

const ChildrenTitle = ({ children, size }: ChildrenTitleProps) => {
  return <div style={{ fontSize: size === 'small' ? '15px' : '20px' }}>{children}</div>
}

const ElementTitle = ({ children, color }: ChildrenTitleElementProps & ColorProps) => {
  return <div style={{ color: color }}>{children}</div>
}


//Exemplo de objeto e atribuindo o tipo

const user = {
  name: 'Diego',
  lastName: 'Ferreira',
  age: 30,
  isAdmin: true,
  dateBirth: new Date(),
}

type userAtributes = typeof user;


//ele ja sabe que o retorno é um número
const soma = (a: number, b: number) => {
  return a + b;
}



function App() {
  return (
    <>
      <div className="App-header">
        <h4>Title com Props</h4> <br />
        <TitleProps text="Hello World" />
        <br /> <br />


        <h4>Title com Children</h4> <br />
        <ChildrenTitle size='medium'>
          Title com Children
        </ChildrenTitle>

        <br /> <br />


        <h4>Title com Element</h4> <br />
        <ElementTitle color='red'>
          <b>Tile com Element</b>
        </ElementTitle>
      </div>
    </>
  );
}

export default App;
