import notifs from '~+/Notifs/middleware/slice'
import pubsub from '~+/Pubsub/middleware/slice'
import query from '~+/Query/middleware/slice'
import routeParams from '~+/RouteParams/middleware/slice'

import layoutPublic from '@/layout/parts/Public/middleware/slice'

export { layoutPublic, query, pubsub, notifs, routeParams }
