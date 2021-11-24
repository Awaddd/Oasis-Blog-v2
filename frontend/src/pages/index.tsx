import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = () => {
  return (
    <Main meta={META}>
      <h1 className="text-2xl font-bold">Hello World</h1>
    </Main>
  );
};

export default Index;
