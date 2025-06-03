import Xarrow from "react-xarrows";

interface AllScenariosEdgesProps {
  scenarioIds: string[];
}

export const AllScenariosEdges = ({ scenarioIds }: AllScenariosEdgesProps) => {
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

interface SpecificScenariosEdgesProps {
  scenarioId: string;
  showEventPhase: boolean;
}

export const SpecificScenariosEdges = ({
  scenarioId,
  showEventPhase,
}: SpecificScenariosEdgesProps) => {
  return (
    <>
      {showEventPhase ? (
        <>
          <Xarrow
            key={`scenario-to-dem-specific`}
            start={scenarioId}
            startAnchor="right"
            end={"dem-specific"}
            endAnchor="left"
            color="#01ab8b"
            strokeWidth={1}
            curveness={0.3}
            showTail={true}
            headShape="circle"
            tailShape="circle"
            headColor="black"
            tailColor="black"
          />
          <Xarrow
            key={`dem-specific-to-impact`}
            start={`dem-specific`}
            startAnchor="right"
            end={`impact-node`}
            endAnchor="left"
            color="#db4742"
            strokeWidth={1}
            curveness={0.3}
            showTail={true}
            headShape="circle"
            tailShape="circle"
            headColor="black"
            tailColor="black"
          />
        </>
      ) : (
        Array.from({ length: 12 }).map((_, i) => (
          <>
            <Xarrow
              key={`scenario-to-control-${i}`}
              start={scenarioId}
              startAnchor="right"
              end={`accordion-button-specific-control-${i}`}
              endAnchor="left"
              color="#01ab8b"
              strokeWidth={1}
              curveness={0.3}
              showTail={true}
              headShape="circle"
              tailShape="circle"
              headColor="black"
              tailColor="black"
            />
            <Xarrow
              key={`control-${i}-to-impact`}
              start={`accordion-button-specific-control-${i}`}
              startAnchor="right"
              end={`impact-node`}
              endAnchor="left"
              color="#db4742"
              strokeWidth={1}
              curveness={0.3}
              showTail={true}
              headShape="circle"
              tailShape="circle"
              headColor="black"
              tailColor="black"
            />
          </>
        ))
      )}
      <Xarrow
        key={`dem-specific-to-sf-left`}
        start={`dem-specific-left`}
        startAnchor="bottom"
        end={`support-factor-node`}
        endAnchor="top"
        color="gray"
        strokeWidth={1}
        curveness={0.3}
        showTail={true}
        headShape="circle"
        tailShape="circle"
        headColor="black"
        tailColor="black"
      />
      <Xarrow
        key={`dem-specific-to-sf-right`}
        start={`dem-specific-right`}
        startAnchor="bottom"
        end={`support-factor-node`}
        endAnchor="top"
        color="gray"
        strokeWidth={1}
        curveness={0.3}
        showTail={true}
        headShape="circle"
        tailShape="circle"
        headColor="black"
        tailColor="black"
      />
    </>
  );
};
