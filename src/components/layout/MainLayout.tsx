import Sidebar from "./sidebar/Sidebar";
import SidebarResponsive from "./sidebar/SidebarResponsive";
import MainContent from "./content/MainContent";
import Header from "./header/header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = async ({ children }) => {
    // const isOpenModal = data?.store?.id === null;

    return (
        <div className="min-h-screen flex w-full">
            <Sidebar />
            <SidebarResponsive />
            <div className="min-h-0 w-full">
                <Header />
                <MainContent>{children}</MainContent>
            </div>
        </div>
    );
};

export default MainLayout;
