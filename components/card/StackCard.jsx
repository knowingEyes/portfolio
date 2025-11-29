const { STACKS_DATA } = require("@/data/stacks");
const { default: Card } = require("../ui/Card");

const StackCard = () => (
  <div className="grid gap-6">
    {STACKS_DATA.map((item, i) => (
      <Card key={i} className="flex flex-col justify-center min-h-40">
        <div
          className="mb-4 inline-flex p-3 rounded-lg bg-gray-950 border border-gray-800 w-fit group-hover:scale-[1.09]
        group-hover:border-white transition-transform cursor-pointer duration-500"
        >
          <item.icon className="h-5 w-5 text-primary-400" />
        </div>
        <h4 className="text-base font-bold text-gray-100 mb-2">{item.title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
          {item.desc}
        </p>
      </Card>
    ))}
  </div>
);

export default StackCard;
