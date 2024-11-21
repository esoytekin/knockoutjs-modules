import { Flag } from "../interface/flag";

export interface FlagApi {
    getFlags(): Promise<Flag>;
    addFlag(f: Flag): Promise<void>;
    updateFlag(f: Flag): Promise<void>;
    deleteFlag(id: string): Promise<void>;
}
