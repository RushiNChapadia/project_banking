import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';


const Home = async () => {
    const loggedIn = await getLoggedInUser();
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.name || 'Guest'}
                      subtext="Access and manage your account and transaction efficiently."
                    />

                    <TotalBalanceBox 
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                    />
                </header> 

                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 213.21}, {currentBalance: 1241 }]}
            />
        </section>
    )
}

export default Home