import {Card, CardHeader, CardBody} from "@heroui/react";


export default function App(props) {
  return (
    <Card className="w-full h-full flex-1 flex justify-center">
      <CardHeader className="flex items-center justify-center gap-1">
        <div>{props.skillIcon}</div>
        <p className="text-3xl font-Quantico font-bold text-center">Skills</p>
      </CardHeader>
      <CardBody className="flex flex-wrap flex-row gap-2 w-full h-full items-start justify-center">
        <div>{props.jsIcon}</div>
        <div>{props.tsIcon}</div>
        <div>{props.nuxtIcon}</div>
        <div>{props.vueIcon}</div>  
        <div>{props.astroIcon}</div>
        <div>{props.twIcon}</div>
        <div>{props.pixIcon}</div>
        <div>{props.pyIcon}</div>
        <div>{props.mdIcon}</div>
      </CardBody>
    </Card>
  );z
}
