interface ChallengeDetailsProps {
  projectName: string;
  description: string;
}

export default function ChallengeDetails({
  projectName,
  description,
}: ChallengeDetailsProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Project Brief : {projectName}
      </h1>
      <p className="text-gray-600">{description}</p>
      <p className="text-2xl font-semibold text-gray-800">Task:</p>
      <ChallengeDetailsItems
        productRequirements={[
          "UX research to understand Project Requirements",
          "Understanding User Needs",
          "Understanding Business Goals",
          "Determine interaction between users",
          "Requirements Catalog",
        ]}
        productDesign={[
          "User Interface Design for each step",
          "Creating wireframes to outline the basic structure and layout of the web and mobile app.",
          "Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.",
          "Ensuring the web application works seamlessly across web, mobile, and tablet devices.",
          "Provide a feedback session for in-development guidance",
        ]}
        deliverables={[
          "Requirements Catalog and User Interaction Diagram",
          "User Interface Mockups",
          "Payroll and HR System Design Completed",
        ]}
      />
    </div>
  );
}

const ChallengeDetailsItems: React.FC<{
  productRequirements: string[];
  productDesign: string[];
  deliverables: string[];
}> = ({ productRequirements, productDesign, deliverables }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product Requirements
        </h1>
        <div>
          {productRequirements.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Product Design:</h1>
        <div>
          {productDesign.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Deliverables:</h1>
        <div >
          {deliverables.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Deliverables:</h1>
        <ul className=""></ul>
      </div>
    </div>
  );
};
