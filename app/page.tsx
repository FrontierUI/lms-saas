import { recentSessions } from '@/constants';

import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

const Page = () => {
  //

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neutral network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="County the Number Wizard"
          topic="Derivates & Integrals"
          subject="science"
          duration={35}
          color="#e5d0ff"
        />
        <CompanionCard
          id="879"
          name="Verby the voculabary builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
