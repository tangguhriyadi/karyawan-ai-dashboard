import { Card, Button } from "antd";
import React, { useState } from "react";
import CoreInput from "../../../components/form/input/input";
import useOrganizationStore from "../../../store/organization";
import useUserStore from "@/features/user/store/user";
import useRegisterMootasi from "../hooks/use-register-mootasi";

const MootasiRegisterForm = ({ license_id }: { license_id: number }) => {
    const [value, setValue] = useState<string>("");
    const { selectedOrganization } = useOrganizationStore();
    const { currentUser } = useUserStore();

    const submitHook = useRegisterMootasi();

    const handleSubmit = async () => {
        await submitHook.mutateAsync({
            license_id,
            organization_id: selectedOrganization?.id ?? 0,
            user_id: currentUser?.id ?? 0,
            credentials: value,
        });
    };
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Card className="w-full max-w-[480px]">
                <h3 className="font-semibold text-2xl mb-2">
                    Mohon isi dulu API key bot kamu ya
                </h3>
                <div className="flex flex-col gap-y-4">
                    <CoreInput
                        label="API Key Telegram"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        disabled={submitHook.isPending}
                    />
                    <h4 className="font-semibol text-xl mb-2">
                        Apa itu API Key Telegram ? Simak video berikut:
                    </h4>

                    <div>
                        <iframe
                            className="aspect-video"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/FD-DB_sjH1o"
                            title="Tutorial membuat Chatbot Telegram (Mootasi)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="text-xl mb-2">
                        Butuh bantuan?{" "}
                        <a target="_blank" href="https://wa.me/6285183033877">
                            Klik disini
                        </a>
                    </div>

                    <Button
                        loading={submitHook.isPending}
                        disabled={value.length === 0}
                        type="primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default MootasiRegisterForm;
