import * as TextStyles from './TextStyles.js'

export default function Header({headers}) {
    return (
      <>
        {headers.map((header) => {
          if(header.style == 'lewd'){
            return <TextStyles.LewdText>{header.content}</TextStyles.LewdText>
          } else if(header.style == 'warm') {
            return <TextStyles.WarmthText>{header.content}</TextStyles.WarmthText>
          } else if(header.style == 'default') {
            return <TextStyles.DefaultText>{header.content}</TextStyles.DefaultText>
          }
        })}
      </>
    )
}
