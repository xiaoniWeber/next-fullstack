type IStatus = {
  statusCode: number;
};
type IProps = {
  res: any;
  err: any;
};
function Error({ statusCode }: IStatus) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: IProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
