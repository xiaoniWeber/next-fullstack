import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import SidebarLayout from "../../components/layouts/sidebar/SidebarLayout";
import { NextPageWithLayout } from "../page";
import { useRouter } from "next/router";

const ChangeRouter: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <section>
      <h2>{router.query.id}</h2>
    </section>
  );
};

export default ChangeRouter;

ChangeRouter.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
