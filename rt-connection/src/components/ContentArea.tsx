type Props = {
  content: string;
};

function ContentArea({ content }: Props) {
  return <div>{content}</div>;
}

export default ContentArea