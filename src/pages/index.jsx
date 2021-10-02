import image from 'next/image';
import SideBar from '../components/Sidebar/Bar';
import AllBox from '../components/SearchTT/Box';
import ContainerPage from '../components/Container/Container';
import Tweets from '../components/Tweets/Tweets';

export default function HomePage() {
    return(
    <>
        <div className="min-h-screen mx-auto max-w-7xl flex">
                <SideBar/>
            <main className="flex-1 flex flex-col border-r border-l border-b border-primary-container_border_color bg-black">
                <ContainerPage/>         
            </main>
            <aside className="bg-black w-350">
                <AllBox/>
            </aside>
        </div>
    </>
    )
}