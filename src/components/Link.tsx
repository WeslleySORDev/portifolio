type Props = {
  name: string;
  image_alt: string;
  image_path: string;
};

export function Link({ name, image_path, image_alt }: Props) {
  return (
    <div className="flex items-center gap-5">
      <img src={image_path} alt={image_alt} />
      <span className="text-xs font-normal">{name}</span>
    </div>
  );
}
