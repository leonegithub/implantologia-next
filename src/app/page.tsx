import MinMax from "@/app/components/minMax";
import ProtocolloSemplificato from '@/app/components/protocolloSemplificato';
import OneForAll from "@/app/components/oneForAll";
import ProtocolloSemplificatoDue from "@/app/components/protocolloSemplificatoDue";

export default function Home() {
    return (
        <>
            <div className="margin">
                <MinMax />
            </div>
            <div className="margin">
                <ProtocolloSemplificato />
            </div>
            <div className="margin">
                <OneForAll />
            </div>
            <div className="margin">
                <ProtocolloSemplificatoDue />
            </div>
        </>
  );
}
