import { publicUserRef } from '../firestore-refs/firestoreRefs'
import { PublicUser } from '../models/publicUser'

/** PublicUser のリポジトリ */
export class PublicUserRepository {
    /** 指定した PublicUser を取得する。 */
    async fetchPublicUser({ publicUserId }: { publicUserId: string }): Promise<PublicUser | undefined> {
        const ds = await publicUserRef({ publicUserId: publicUserId }).get()
        return ds.data()
    }
}
