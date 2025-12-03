const InfoItem = ({ Icon, label, value, href }) => {
  const Tag = href ? "a" : "p";
  return (
    <>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-gray-900 rounded border border-gray-800">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="uppercase text-gray-500 tracking-wider mb-1">{label}</p>
          <Tag
            href={href}
            className="text-white hover:text-primary-400 transition-colors"
          >
            {value}
          </Tag>
        </div>
      </div>
    </>
  );
};

export default InfoItem;
