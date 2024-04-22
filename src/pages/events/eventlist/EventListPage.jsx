import { useState } from "react";
import FilterEventList from "./FilterEventList";
import EventList from "./EventList";
import { Row, Col } from "antd";

export default function EventListPage({
  next,
  setEvent,
  showModal,
  payload,
  initFormData,
  updatedCount,
  handleDelete,
}) {
  const [searchObj, setSearchObj] = useState({});

  return (
    <Row justify="space-between" gutter={[14, 14]} style={{ margin: 0 }}>
      <FilterEventList searchObj={searchObj} setSearchObj={setSearchObj} />
      <Col span={18}>
        <EventList
          searchObj={searchObj}
          next={next}
          setEvent={setEvent}
          payload={payload}
          initFormData={initFormData}
          updatedCount={updatedCount}
          showModal={showModal}
          handleDelete={handleDelete}
        />
      </Col>
    </Row>
  );
}
