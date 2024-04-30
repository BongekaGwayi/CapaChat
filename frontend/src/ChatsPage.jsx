import{MultiChatSocket, MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic  (
    '404601a9-66ef-48f2-8860-b461800a9cfa', 
    props.user.username,
    props.user.secret
    );
    return (
     <div style={{ height: '100vh'}}>
     <MultiChatSocket {...chatProps} />
     <MultiChatWindow {...chatProps}  style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage
