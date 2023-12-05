import CatCard from "../components/cards/cat/CatCard";
import { mockCatCardProps } from "../components/cards/cat/CatCard.mocks";
import { NextPageWithLayout } from "./page";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SidebarLayout from "../components/layouts/sidebar/SidebarLayout";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <section>
        <h1>
          Welcome to <a href="<https://nextjs.org>">Next.js!</a>
        </h1>

        <div style={{ display: "flex" }}>
          <CatCard {...mockCatCardProps.base} />
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
