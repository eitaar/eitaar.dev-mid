import {Card, CardHeader, CardBody,Divider, Button, Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
export default function App(props) {
  return (
    <Card className="w-full h-full flex-1 flex justify-center">
      <CardHeader className="flex gap-3">
        <div>{props.avatarImg}</div>
        <div className="flex flex-col font-Quantico text-center tracking-tightest">
          <p className="text-3xl font-bold">eitaar</p>
          <p className="text-lg text-default-500">student?</p>
        </div>
        <Divider className="h-3/4" orientation="vertical" />
        <div className="flex flex-col justify-center font-Quantico tracking-tightest">
          <p className="text-xl">16 | Coding Begginer</p>
          <p className="text-xl">Japanease</p>
          <p className="text-xl">Learning React</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-wrap flex-row gap-2 w-full items-center justify-center pt-0 max-h-15">
        <Button
          isIconOnly
          aria-label="twitter"
          variant="light"
          ><a href="https://x.com/eitaar0" target="_blank" rel="noopener noreferrer" aria-label="twitter">
            <div>{props.xIcon}</div>
          </a> 
          </Button>
        <Divider orientation="vertical" className="h-8" />
        <Button
          isIconOnly
          aria-label="github"
          variant="light"
          ><a href="https://github.com/eitaar/" target="_blank" rel="noopener noreferrer" aria-label="github">
            <div>{props.githubIcon}</div>
          </a>
          </Button>
        <Divider orientation="vertical" className="h-8" />
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button
                isIconOnly
                aria-label="discord"
                variant="light"
                onPressEnd={() => {
                  navigator.clipboard.writeText("eitaar");
                }}
                >
              <div>{props.discordIcon}</div>
              </Button>              
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-tiny">Copied username!</div>
              </div>
            </PopoverContent>
          </Popover>          
      </CardBody>
    </Card>
  );
}
