import { Drawer, List, Avatar, Divider, Col, Row } from "antd";
import React from "react";

export const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class ProfileDrawer extends React.Component {
  render() {
    console.log("adasda", this.props.data);
    return (
      <>
        <Drawer
          width={640}
          placement="right"
          closable={true}
          onClose={this.props.closeDrawer}
          visible={this.props.drawerVisible}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 50 }}
          >
            User Profile
          </p>

          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content="AntDesign@example.com"
              />
            </Col>
          </Row>
          <Row>
            {this.props.data
              ? this.props.data.map((data, index) => {
                  return data;
                })
              : ""}
          </Row>
        </Drawer>
      </>
    );
  }
}

export default ProfileDrawer;
