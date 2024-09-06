import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabStyle() {
    return (
        <div>
            <Tabs
                defaultActiveKey="info"
                id="justify-tab-example"
                className="mb-3 mt-3"
                fill
            >
                <Tab eventKey="info" title="상품설명">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="상품 상세정보">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="리뷰">
                    Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
}
