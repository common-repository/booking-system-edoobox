<?php

namespace Edoobox\Base;

class LogTime {

    public static function start($name) {
        self::prepare();
        $GLOBALS['edoobox_time_logs_running'][$name][] = microtime(true);
    }

    public static function stop($name) {
        self::prepare();
        $GLOBALS['edoobox_time_logs'][] = [
            "name" => $name,
            "start" => array_shift($GLOBALS['edoobox_time_logs_running'][$name]) ?? 0,
            "end" => microtime(true)
        ];
    }

    public static function asHtmlCommentString($decimals = 2, $withSanityTest = false): string {
        self::prepare();
        if ($withSanityTest) {
            $GLOBALS['edoobox_time_logs'][] = [
                'name' => 'sanity test',
                'start' => round(microtime(true), $decimals),
                'end' => round(microtime(true), $decimals)
            ];
        }
        $time_logs_comment = '';
        foreach ( $GLOBALS['edoobox_time_logs'] as $log ) {
            $elapsed = round(($log['end'] ?? 0) - ($log['start'] ?? 0), $decimals);
            $name = $log['name'] ?? 'n/a';
            $time_logs_comment .= '<!--edoobox | ' . $name . ': ' . ($elapsed) . '-->';
        }
        return $time_logs_comment;
    }

    private static function prepare() {
        $GLOBALS['edoobox_time_logs'] = $GLOBALS['edoobox_time_logs'] ?? [];
        $GLOBALS['edoobox_time_logs_running'] = $GLOBALS['edoobox_time_logs_running'] ?? [];
    }

}