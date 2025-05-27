import {Card, CardHeader, CardBody} from "@heroui/react";

export default function App(props) {
  return (
    <Card className="w-full h-full flex-1 flex justify-center">
      <CardHeader className="flex items-center justify-center gap-1">
        <div>{props.interestIcon}</div>
        <p className="text-3xl font-Quantico font-bold text-center">Interests</p>
      </CardHeader>
      <CardBody className="flex flex-wrap flex-row gap-2 w-full items-start justify-center">
        <div>{props.ardIcon}</div>
        <div>{props.cppIcon}</div>
        <div>{props.rustIcon}</div>
        <div>{props.bderIcon}</div>
        <div>{props.fltIcon}</div>
        <div>{props.javaIcon}</div>
        <div>{props.p5Icon}</div>
        <div>{props.thjsIcon}</div>
        <div>{props.reactIcon}</div>
      </CardBody>
    </Card>
  );z
}
