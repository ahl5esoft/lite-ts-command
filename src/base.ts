import { CommandOption } from './option';
import { ICommandResult } from './result';

export abstract class CommandBase {
    public abstract exec(v: CommandOption): Promise<ICommandResult>;
}