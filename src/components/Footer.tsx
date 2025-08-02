import Logo from "./Logo";
import Separator from "./Separator";

export default function Footer() {
    return (
        <>
            <Separator />
            <footer className="bg-primary-250 py-6">
                <section className="wrapper-primary flex items-center gap-[67px]">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <h3 className="h3-semibold text-primary-650">
                            Brand Name
                        </h3>
                    </div>
                    <p className="font-inter p-small text-primary-550 flex-1">
                        © 2024 <strong>Brand Name</strong> All rights reserved.
                        Unauthorized use or copying of this brand is strictly
                        prohibited. No part of this website may be reproduced,
                        distributed, or transmitted in any form or by any means,
                        including photocopying, recording, or other electronic
                        or mechanical methods, without the prior written
                        permission of <strong>Brand Name</strong>, except in the
                        case of brief quotations embodied in critical reviews
                        and certain other non-commercial uses permitted by
                        copyright law.
                    </p>
                </section>
            </footer>
        </>
    );
}
