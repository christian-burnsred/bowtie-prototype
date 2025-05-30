import Xarrow from "react-xarrows";

interface EdgesProps {
  scenarioIds: string[];
}

const Edges = ({ scenarioIds }: EdgesProps) => {
  return (
    <>
      {scenarioIds.map((scenarioId) => (
        <Xarrow
          key={`arrow-${scenarioId}`}
          start={scenarioId}
          startAnchor={"right"}
          end={"preventative-control"}
          endAnchor={"left"}
          color="#01ab8b"
          strokeWidth={1}
          curveness={0.3}
          showTail={true}
          headShape={"circle"}
          tailShape={"circle"}
          headColor={"black"}
          tailColor={"black"}
        />
      ))}
      <Xarrow
        key={`arrow-preventative-to-dem`}
        start={"preventative-control"}
        end={"dem-node"}
        color="#01ab8b"
        strokeWidth={1}
        curveness={0.3}
      />
      <Xarrow
        key={`arrow-dem-to-mitigative`}
        start={"dem-node"}
        end={"mitigative-control"}
        color="#db4742"
        strokeWidth={1}
        curveness={0.3}
      />
      <Xarrow
        key={`arrow-mitigative-to-impact`}
        start={"mitigative-control"}
        end={"impact-node"}
        color="#db4742"
        strokeWidth={1}
        curveness={0.3}
      />
      <Xarrow
        key={`arrow-preventative-to-sf`}
        start={"preventative-control"}
        end={"support-factor-node"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        color="#01ab8b"
        strokeWidth={1}
        curveness={0.3}
        showTail={true}
        headShape={"circle"}
        tailShape={"circle"}
        headColor={"black"}
        tailColor={"black"}
      />
      <Xarrow
        key={`arrow-mitigative-to-sf`}
        start={"mitigative-control"}
        end={"support-factor-node"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        color="#01ab8b"
        strokeWidth={1}
        curveness={0.3}
        showTail={true}
        headShape={"circle"}
        tailShape={"circle"}
        headColor={"black"}
        tailColor={"black"}
      />
    </>
  );
};

export default Edges;
