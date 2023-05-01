type Props = {
  name: string;
};

export function Tech({ name }: Props) {
  return (
    <span className="flex-1 p-2 rounded-md bg-bg-techs text-text-techs text-[10px] leading-3 font-medium text-center uppercase">
      {name}
    </span>
  );
}
