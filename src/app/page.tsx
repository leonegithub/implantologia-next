import MinMax from "@/app/components/minMax";
import ProtocolloSemplificato from '@/app/components/protocolloSemplificato';

export default function Home() {
    return (
        <>
            <div className="margin">
                <MinMax />
            </div>
            <ProtocolloSemplificato />
        </>
  );
}
