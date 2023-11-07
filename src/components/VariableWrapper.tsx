interface IProps {
  children: React.ReactNode;
}

export const VariableWrapper = ({ children }: IProps) => {
  return (
    <>
      <div className="bg-slate-300 p-4 flex gap-2 mb-2">{children}</div>
    </>
  );
};
